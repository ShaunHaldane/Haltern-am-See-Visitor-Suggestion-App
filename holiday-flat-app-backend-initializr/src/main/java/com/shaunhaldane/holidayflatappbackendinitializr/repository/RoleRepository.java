package com.shaunhaldane.holidayflatappbackendinitializr.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shaunhaldane.holidayflatappbackendinitializr.role.ERole;
import com.shaunhaldane.holidayflatappbackendinitializr.role.Role;


@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
	Optional<Role> findByName(ERole name);
}
