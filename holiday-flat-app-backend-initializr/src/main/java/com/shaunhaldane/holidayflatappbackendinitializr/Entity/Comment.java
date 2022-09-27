package com.shaunhaldane.holidayflatappbackendinitializr.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Table(name = "comments")
@Data
public class Comment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Lob
	@Column(name = "content")
	public String content;
	
	@Column(name = "date_posted")
	public String datePosted;
	
	@ManyToOne
	@JoinColumn(name = "place_id")
	@JsonIgnore
	private Place place;

	@Column(name = "username")
	private String username;
}
