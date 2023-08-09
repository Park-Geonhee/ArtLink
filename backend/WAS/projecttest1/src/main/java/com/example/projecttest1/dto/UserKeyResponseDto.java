package com.example.projecttest1.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;

@Data
@RequiredArgsConstructor
public class UserKeyResponseDto {
    private final String userKey;
    private final String exhibitionName;
    private final String galleryName;
    private final LocalDate visitDate;

}
