package com.shaunhaldane.holidayflatappbackendinitializr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shaunhaldane.holidayflatappbackendinitializr.Entity.Interest;

@Repository
public interface InterestRepository extends JpaRepository<Interest, Integer> {
	
	Interest findById(int id);
}
