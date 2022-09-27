package com.shaunhaldane.holidayflatappbackendinitializr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shaunhaldane.holidayflatappbackendinitializr.Entity.Disability;


@Repository
public interface DisabilityRepository extends JpaRepository<Disability, Integer> {

	Disability findById(int id);
}
