package com.shaunhaldane.holidayflatappbackendinitializr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.shaunhaldane.holidayflatappbackendinitializr.Entity.Visitor;

@Repository
public interface VisitorRepository extends JpaRepository<Visitor, Integer> {

	Visitor findById(int id);

	@Query("SELECT v from Visitor v WHERE v.user.id = :userId")
	Iterable<Visitor> getAllVisitorsByUserId(@Param("userId") Long userId);

}
