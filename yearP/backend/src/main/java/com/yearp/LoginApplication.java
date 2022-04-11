package com.yearp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@EnableTransactionManagement
public class LoginApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginApplication.class, args);
	}
	
//	@Bean
//	public PlatformTransactionManager transactionManager(@Autowired DataSource dataSource) {
//		return new DataSourceTransactionManager(dataSource); 
//	}	

}
