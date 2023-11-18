package mapper;

import pojo.User;
import org.apache.ibatis.annotations.Param;

public interface UserMapper {
    User select(@Param("username") String username,@Param("password") String password);
    User selectById(String username);
    void add(User user);
}