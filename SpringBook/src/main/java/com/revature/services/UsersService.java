package com.revature.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;
import com.revature.models.Users;
import com.revature.repos.UsersRepo;

@Service
public class UsersService {

	private UsersRepo uRepo;

	@Autowired
	public UsersService(UsersRepo usRepo) {
		this.uRepo = usRepo;
	}

	@Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED)
	public List<Users> getAll() {
		return (List<Users>) uRepo.findAll();
	}

	public Users saveUser(Users users) {// this is for add new users
		return uRepo.save(users);
		// take input form user and save to the database(register new user)
	}

	@Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED)
	public Users getUserByEmail(String email) {
		return uRepo.findByEmail(email);
	}

//	public Users getUserByEmailAndPassWord(String email, String passWord) {	
//		return uRepo.findByEmailAndPassWord(email, passWord);
//	}

	public List<Users> getUsersByFirstName(String firstName) {
		return (List<Users>)uRepo.findByFirst_name(firstName);
	}

	public Users updateProfile(Users users) {
		return saveUser(users);
	}

	public Users resetPassword(Users users) {
		Users currentUser = uRepo.findByEmail(users.getEmail());
		currentUser.setPassWord(users.getPassWord());
		return uRepo.save(currentUser);
	}

}
