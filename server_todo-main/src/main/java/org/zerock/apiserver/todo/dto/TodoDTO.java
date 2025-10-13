package org.zerock.apiserver.todo.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;


@Data
public class TodoDTO {
  
  private Integer tno;

  private String title;

  private String writer;

  private Boolean completed;

  @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
  private LocalDateTime createdDate;

  public TodoDTO(Integer tno, String title, String writer, Boolean completed, LocalDateTime createdDate) {
    this.tno = tno;
    this.title = title;
    this.writer = writer;
this.completed = (completed != null) ? completed : false; // 생성자에 로직을 추가

    this.createdDate = createdDate;
  }

}
