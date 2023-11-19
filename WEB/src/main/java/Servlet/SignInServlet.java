package Servlet;

import mapper.UserMapper;
import org.apache.ibatis.session.SqlSession;
import pojo.User;
import util.SqlSessionUtil;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

public class SignInServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String userName = req.getParameter("username");
        String userPassword = req.getParameter("password");
        System.out.println(userName);
        System.out.println(userPassword);
        SqlSession session = SqlSessionUtil.openSession();
        UserMapper mapper = session.getMapper(UserMapper.class);

        User user = new User();
        user.setName(userName);
        user.setPassword(userPassword);
        mapper.insert(user);
        session.commit();
        session.close();
    }
}
