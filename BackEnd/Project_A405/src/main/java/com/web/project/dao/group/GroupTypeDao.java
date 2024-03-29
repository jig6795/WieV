package com.web.project.dao.group;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.web.project.model.group.GroupType;

@Repository
public interface GroupTypeDao extends JpaRepository<GroupType, String>{
	GroupType findGroupTypeByWaitSessionName(String waitSessionName);
	GroupType findGroupTypeByInterviewSessionName(String interviewSessionName);
	
	List<GroupType> findListGroupTypeByGroupGroupSeq(int groupGroupSeq);
	
	GroupType findGroupTypeByGroupTypeSeq(int groupTypeSeq); // SessionController
}
