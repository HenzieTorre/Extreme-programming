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
import java.util.Objects;

public class LoginServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String userName = req.getParameter("username");
        String userPassword = req.getParameter("password");
        System.out.println(userName);
        System.out.println(userPassword);
        PrintWriter writer = resp.getWriter();

        SqlSession session = SqlSessionUtil.openSession();
        UserMapper mapper = session.getMapper(UserMapper.class);
        User user = mapper.selectByName(userName);
        if (Objects.equals(user.getPassword(), userPassword)){
            writer.print("OK");
            HttpSession webSession = req.getSession();
            if (session != null) {
                // 可以在这里读取或写入会话中的信息
                webSession.setAttribute("username", userName);
            }
        }

        session.close();
    }
}
