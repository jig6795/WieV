package com.web.project.dao.interview;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.web.project.model.interview.Interviewer;

@Repository
public interface InterviewerDao extends JpaRepository<Interviewer,String> {
	Interviewer findInterviewerByViewSeq(int viewSeq);

	
	Optional<Interviewer> findOptionalInterviewerByViewSeq(int viewSeq);

	List<Interviewer> findAllInterviewerByCompanyComSeqAndCareerCaSeqAndCareerPartPartSeqAndViewAssigned(int companyComSeq,int careerCaSeq,int careerPartPartSeq,int viewAssigned);
	
	Optional<Interviewer> findOptionalInterviewerByViewEmailAndViewPassword(String viewEmail, String viewPassword);
}