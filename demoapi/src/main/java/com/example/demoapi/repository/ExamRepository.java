package com.example.demoapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demoapi.entity.Exam;

public interface ExamRepository extends JpaRepository<Exam, Integer> {
}
