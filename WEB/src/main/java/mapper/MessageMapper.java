package mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import pojo.Message;
import pojo.MessageExample;

public interface MessageMapper {
    long countByExample(MessageExample example);

    int deleteByExample(MessageExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Message row);

    int insertSelective(Message row);

    List<Message> selectByExample(MessageExample example);

    Message selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("row") Message row, @Param("example") MessageExample example);

    int updateByExample(@Param("row") Message row, @Param("example") MessageExample example);

    int updateByPrimaryKeySelective(Message row);

    int updateByPrimaryKey(Message row);
}