package com.shaunhaldane.holidayflatappbackendinitializr.controller;

import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import com.shaunhaldane.holidayflatappbackendinitializr.Entity.Comment;
import com.shaunhaldane.holidayflatappbackendinitializr.Entity.Disability;
import com.shaunhaldane.holidayflatappbackendinitializr.Entity.Interest;
import com.shaunhaldane.holidayflatappbackendinitializr.Entity.Place;
import com.shaunhaldane.holidayflatappbackendinitializr.Entity.Visitor;
import com.shaunhaldane.holidayflatappbackendinitializr.repository.RoleRepository;
import com.shaunhaldane.holidayflatappbackendinitializr.repository.UserRepository;
import com.shaunhaldane.holidayflatappbackendinitializr.repository.InterestRepository;
import com.shaunhaldane.holidayflatappbackendinitializr.repository.PlaceRepository;
import com.shaunhaldane.holidayflatappbackendinitializr.repository.CommentRepository;
import com.shaunhaldane.holidayflatappbackendinitializr.repository.DisabilityRepository;
import com.shaunhaldane.holidayflatappbackendinitializr.repository.VisitorRepository;
import com.shaunhaldane.holidayflatappbackendinitializr.security.jwt.JwtUtils;
import com.shaunhaldane.holidayflatappbackendinitializr.security.service.UserDetailsServiceImpl;
import com.shaunhaldane.holidayflatappbackendinitializr.service.UserService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
@PreAuthorize("hasRole('USER')")
public class UserController {
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RoleRepository roleRepository;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	JwtUtils jwtUtils;
	
	@Autowired
	private InterestRepository interestRepository;
	
	@Autowired
	private DisabilityRepository disabilityRepository;
	
	@Autowired
	private VisitorRepository visitorRepository;
	
	@Autowired
	private PlaceRepository placeRepository;
	
	@Autowired
	private CommentRepository commentRepository;
	
	@Autowired
	private UserDetailsServiceImpl userDetailsService;
	
	@Autowired
	private UserService userService;
	
	///// Visitors

	@PostMapping("/register-visitor")
	public ResponseEntity<Visitor> createVisitor(@RequestBody Visitor visitor) {
		Visitor _visitor = new Visitor();
		_visitor.setId(visitor.getId());
		_visitor.setName(visitor.getName());
		_visitor.setInterests(visitor.getInterests().stream().map(I -> {
			Interest interest = I;
			if(interest.getId() > 0) {
				interest = interestRepository.findById(interest.getId());
			}
			interest.addVisitor(_visitor);
			return interest;
		}).collect(Collectors.toList()));
		
		_visitor.setDisabilities(visitor.getDisabilities().stream().map(D -> {
			Disability disability = D;
			if(disability.getId() > 0) {
				disability = disabilityRepository.findById(disability.getId());
			}
			disability.addVisitor(_visitor);
			return disability;
		}).collect(Collectors.toList()));
		
		_visitor.setUser(userRepository.findUserById(userDetailsService.getLoggedInUser().getId()));
		visitorRepository.save(_visitor);
		return new ResponseEntity<>(_visitor, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/visitor/{id}")
	public ResponseEntity<HttpStatus> deleteVisitor(@PathVariable("id") int id) {
		Visitor visitor = visitorRepository.findById(id);
        //Remove the related interests and disabilities from visitor entity.
        visitor.removeInterests();
        visitor.removeDisabilities();
        visitorRepository.deleteById(visitor.getId());
	    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	  }
	
	@GetMapping("/visitors")
	public Iterable<Visitor> getVisitors() {
		return userService.getVisitors();
	}
	
	@GetMapping("/plan")
	public Set<Place> getPlacesByInterestsAndDisabilities() {
		return userService.getRecommendedPlaces();
	}
	
	///// Interests and Disabilities
	
	@GetMapping("/interests")
	public Iterable<Interest> getInterests() {
		return interestRepository.findAll();
	}
	
	@GetMapping("/disabilities")
	public Iterable<Disability> getDisabilities() {
		return disabilityRepository.findAll();
	}
	
	// Add new comment to place
	@PostMapping("/add-comment/{placeId}")
	public String addCommentToPlace(@Valid @PathVariable("placeId") int placeId, 
			@RequestBody Comment comment) {
		Place place = placeRepository.findById(placeId);
		if(place != null) {
			comment.setPlace(place);
			comment.setUsername(userDetailsService.getLoggedInUser().getUsername());
			commentRepository.save(comment);
			return "Comment posted";
		} else {
			return "Cannot find post";
		}
	}
	
}
