package com.revature.repos;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Users;



@Repository
public interface UsersRepo extends CrudRepository<Users,Integer>{
 
	public Users findByEmail(String email);
	
	public Users findByEmailAndPassword(String email, String passWord);
}
