package com.shaunhaldane.holidayflatappbackendinitializr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shaunhaldane.holidayflatappbackendinitializr.Entity.Disability;
import com.shaunhaldane.holidayflatappbackendinitializr.Entity.Place;
import com.shaunhaldane.holidayflatappbackendinitializr.repository.DisabilityRepository;
import com.shaunhaldane.holidayflatappbackendinitializr.repository.PlaceRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/public")
public class PublicController {
	
	@Autowired
	PlaceRepository placeRepository;
	
	@Autowired
	DisabilityRepository disabilityRepository;
	
	@GetMapping("/disabilities")
	public List<Disability> getDisabilities() {
		return disabilityRepository.findAll();
	}
	
	@GetMapping("/places")
	public  List<Place> getAllPlaces() {
		return placeRepository.findAll();
	}
	
	@GetMapping("places/{id}")
	public List<Place> getPlacesByCategoryId(@PathVariable("id") int id) {
		return placeRepository.findPlacesByDisabilitiesId(id);	
		
	}
}
