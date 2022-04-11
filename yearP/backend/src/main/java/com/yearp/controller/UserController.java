package com.yearp.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yearp.dto.JsonResult;
import com.yearp.repository.UserRepository;
import com.yearp.service.UserService;
import com.yearp.vo.UserVo;


@RestController
@RequestMapping("/api/login")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "", method = RequestMethod.GET) // GET으로 들어오면 그냥 form만 보여주면 됨
	public ResponseEntity<JsonResult> login() {
		return ResponseEntity
		.status(HttpStatus.OK)
		.body(JsonResult.success("success"));
	}

	@RequestMapping(value = "", method = RequestMethod.POST) // login.jsp안에서 사용
	public ResponseEntity<JsonResult> login(
			HttpSession session, //원래대로면 filter로 빠져야됨 
			@RequestParam(value="email", required=true, defaultValue=" " )String email,
			@RequestParam(value="password", required=true, defaultValue=" " )String password,
			Model model) {
		//authUser가 null이 아니면 login처리
		UserVo authUser=userService.getUser(email, password); //email과 password를 던져줌
	
		if(authUser==null) {
			model.addAttribute("result", "fail");
			model.addAttribute("email", email); //email을 넘겨옴
			return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success("fail"));
		}
		
	
		/*인증처리*/
		session.setAttribute("authUser", authUser);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(authUser));
	}
	
	
	@GetMapping("/checkemail")
	public Object checkEmail(
			@RequestParam(value="email", required=true, defaultValue="") String email) {
		UserVo userVo = userService.getUser(email);
		return JsonResult.success(userVo != null);
	}

//	@GetMapping
//	public ResponseEntity<JsonResult> read(Long userNo) {
////		log.info("Request [GET /api]");
//
//		return ResponseEntity
//				.status(HttpStatus.OK)
//				.body(JsonResult.success(userRepository.findByNo(userNo)));
//	}
//
//	@PostMapping
//	public ResponseEntity<JsonResult> createLogin(@RequestBody UserVo userVo) {
//		userRepository.insert(userVo);
//		
//		return ResponseEntity
//				.status(HttpStatus.OK)
//				.body(JsonResult.success(userVo));
//	}

	
	@SuppressWarnings("serial")
	@PutMapping("/api/login/{email}/{password}")
	public ResponseEntity<JsonResult> readLogin(@PathVariable("email") String email, @PathVariable("password") String password) {
//		Map<String, String> map = new HashMap<>();
//		map.put("e", email);
//		map.put("p", password);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(new HashMap<String, String>() {{
				    put("email", email);
				    put("password", password);
				}}));
	}




}