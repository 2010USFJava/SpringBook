package com.revature.repos;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface UsersRepo extends CrudRepository<Users,Integer>{

}
