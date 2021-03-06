package com.revature.repos;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.revature.models.Users;

@Repository
public interface UsersRepo extends CrudRepository<Users,Integer>{
	

	//public Users findByEmailAndPassword(String email, String passWord);
	@Query(value = "SELECT * FROM users WHERE first_name=:firstName", nativeQuery = true)
	public List<Users> findByFirst_name(String firstName);

	@Query(value = "SELECT * FROM users WHERE email =:email", nativeQuery = true)
	public Users findByEmail(String email);
	
	//public Users findByEmailAndPassWord(String email, String passWord);

}
