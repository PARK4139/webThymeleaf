package com.jungthoonParkCompany.webThymeleaf.wiki_segments;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Data
public class RowsSkyParasiticide {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String parasiticide_name;
    private String date_to_feed;
    private String date_done;
    private String promised_reference_date;
    private Date date_regeisted;
    private Timestamp datetime_regeisted;
    private Timestamp timestamp_regeisted;
}
