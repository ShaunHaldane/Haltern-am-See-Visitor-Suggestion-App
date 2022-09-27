package com.shaunhaldane.holidayflatappbackendinitializr.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shaunhaldane.holidayflatappbackendinitializr.Entity.Place;

@Repository
public interface PlaceRepository extends JpaRepository<Place, Integer> {

	Place findById(int id);
	
	List<Place> findPlacesByInterestsId(int id);
	
	List<Place> findPlacesByDisabilitiesId(int id);

}
