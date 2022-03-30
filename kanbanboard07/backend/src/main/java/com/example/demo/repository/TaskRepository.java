package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.TaskVo;

@Repository
public class TaskRepository {
	
	@Autowired
	private SqlSession sqlSession;
	
	public List<TaskVo> findAll() {
		System.out.println("tasktastk");
		List<TaskVo> list = sqlSession.selectList("task.findAll");
		System.out.println(list.toString());
		return list;
	}
	
	
	public List<TaskVo> findByNo(Long card_no) {
		List<TaskVo> list= sqlSession.selectList("task.findByNo", card_no);
		System.out.println(list.toString());
		return list;
	}
	

	public boolean insert(TaskVo vo) {
		return sqlSession.insert("task.insertTask", vo) == 1;
	}

	public boolean delete(Long no) {
		return sqlSession.delete("task.deleteTask", no) == 1;
	}

	public boolean update(TaskVo vo) {
		return sqlSession.update("task.update", vo) == 1;
	}
}
