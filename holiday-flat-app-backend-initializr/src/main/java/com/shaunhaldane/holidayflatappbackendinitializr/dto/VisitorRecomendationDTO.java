package com.shaunhaldane.holidayflatappbackendinitializr.dto;

import java.util.List;

import com.shaunhaldane.holidayflatappbackendinitializr.Entity.Place;

import lombok.Data;

@Data
public class VisitorRecomendationDTO {
	
	public String visitorName;
	
	public List<Place> places;

}
