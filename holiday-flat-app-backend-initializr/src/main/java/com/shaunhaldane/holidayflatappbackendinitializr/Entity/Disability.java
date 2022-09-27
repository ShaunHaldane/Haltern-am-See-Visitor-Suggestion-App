package com.shaunhaldane.holidayflatappbackendinitializr.Entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Table(name="disabilities")
@Data
public class Disability {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="name")
	private String name;
	
	@ManyToMany(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
	@JoinTable(
			name="places_disabilities",
			joinColumns = {@JoinColumn(name="disability_id")},
			inverseJoinColumns = {@JoinColumn(name="place_id")})
	@JsonIgnore
	private List<Place> places = new ArrayList<>();
	
	@ManyToMany(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
	@JoinTable(
			name="visitors_disabilities",
			joinColumns = {@JoinColumn(name="disability_id")},
			inverseJoinColumns = {@JoinColumn(name="visitor_id")})
	@JsonIgnore
	private List<Visitor> visitors = new ArrayList<>();

	public Disability() {}

	public Disability(String name) {
		this.name = name;
	}
	
	public void addPlace(Place place) {
		places.add(place);
	}
	
	public void addVisitor(Visitor visitor) {
		visitors.add(visitor);
	}
	
}
