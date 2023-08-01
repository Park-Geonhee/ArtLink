package com.example.projecttest1.repository;

import com.example.projecttest1.entity.Exhibition;
import com.example.projecttest1.entity.Gallery;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExhibitionRepository extends JpaRepository<Exhibition, Integer> {
    List<Exhibition> findAllByGallery(Gallery gallery);
}