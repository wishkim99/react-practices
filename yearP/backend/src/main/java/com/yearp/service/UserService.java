package com.yearp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yearp.repository.UserRepository;
import com.yearp.vo.UserVo;

@Service
public class UserService {//userService 안에서 레퍼지토리 사용할 것
	@Autowired
	private UserRepository userRepository;

	public void join(UserVo userVo) {
		userRepository.insert(userVo);
	}
	
	public List<UserVo> getMessageList(Long no) {
		return userRepository.findAll(no);
	}
	

	public UserVo getUser(String email, String password) {
		// TODO Auto-generated method stub
		return userRepository.findByEmailAndPassword(email, password);
	}


	public UserVo getUser(Long userNo) {
		// TODO Auto-generated method stub
		return userRepository.findByNo(userNo);
	}


	public void updateUser(UserVo userVo) {
		// TODO Auto-generated method stub
		userRepository.update(userVo);
	}
	
	public UserVo getUser(String email) {
		// TODO Auto-generated method stub
		return userRepository.findByEmail(email);
	}
}
