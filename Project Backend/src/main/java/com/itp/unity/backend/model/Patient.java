package com.itp.unity.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "patient")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "phone")
    private String phone;

    @Column(name = "email")
    private String email;

    @Column(name = "gender")
    private String gender;

    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern = "yyyy-mm-dd")
    @Column(name = "dob")
    private Date dob;

    @Column(name = "address")
    private String address;

    @Column(name = "marital_status")
    private String marital_status;

    @Column(name = "guardian_name")
    private String guardian_name;

    @Column(name = "guardian_phone")
    private String guardian_phone;

    @Column(name = "bloodgroup")
    private String bloodgroup;

    @Column(name = "illnesses")
    private String illnesses;

    @Column(name = "medications")
    private String medications;

    @Column(name = "allergy")
    private String allergy;

    @Column(name = "physician_name")
    private String physician_name;

    @Column(name = "notes")
    private String notes;

    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern = "yyyy-mm-dd")
    @Column(name = "last_physical_date")
    private Date last_physical_date;

    public Patient() {
    }

    public Patient(String name, String phone, String email, String gender, Date dob, String address, String marital_status, String guardian_name, String guardian_phone, String bloodgroup, String illnesses, String medications, String allergy, String physician_name, String notes, Date last_physical_date) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.gender = gender;
        this.dob = dob ;
        this.address = address;
        this.marital_status = marital_status;
        this.guardian_name = guardian_name;
        this.guardian_phone = guardian_phone;
        this.bloodgroup = bloodgroup;
        this.illnesses = illnesses;
        this.medications = medications;
        this.allergy = allergy;
        this.physician_name = physician_name;
        this.notes = notes;
        this.last_physical_date = last_physical_date;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMarital_status() {
        return marital_status;
    }

    public void setMarital_status(String marital_status) {
        this.marital_status = marital_status;
    }

    public String getGuardian_name() {
        return guardian_name;
    }

    public void setGuardian_name(String guardian_name) {
        this.guardian_name = guardian_name;
    }

    public String getGuardian_phone() {
        return guardian_phone;
    }

    public void setGuardian_phone(String guardian_phone) {
        this.guardian_phone = guardian_phone;
    }

    public String getBloodgroup() {
        return bloodgroup;
    }

    public void setBloodgroup(String bloodgroup) {
        this.bloodgroup = bloodgroup;
    }

    public String getIllnesses() {
        return illnesses;
    }

    public void setIllnesses(String illnesses) {
        this.illnesses = illnesses;
    }

    public String getMedications() {
        return medications;
    }

    public void setMedications(String medications) {
        this.medications = medications;
    }

    public String getAllergy() {
        return allergy;
    }

    public void setAllergy(String allergy) {
        this.allergy = allergy;
    }

    public String getPhysician_name() {
        return physician_name;
    }

    public void setPhysician_name(String physician_name) {
        this.physician_name = physician_name;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Date getLast_physical_date() {
        return last_physical_date;
    }

    public void setLast_physical_date(Date last_physical_date) {
        this.last_physical_date = last_physical_date;
    }

    public  void setPatientDetails(Patient patient){
        setName(patient.name);
        setPhone(patient.phone);
        setEmail(patient.email);
        setGender(patient.gender);
        setDob(patient.dob);
        setAddress(patient.address);
        setMarital_status(patient.marital_status);
        setGuardian_name(patient.guardian_name);
        setGuardian_phone(patient.guardian_phone);
        setBloodgroup(patient.bloodgroup);
        setIllnesses(patient.illnesses);
        setMedications(patient.medications);
        setAllergy(patient.allergy);
        setPhysician_name(patient.physician_name);
        setNotes(patient.notes);
        setLast_physical_date(patient.last_physical_date);

    }



}
