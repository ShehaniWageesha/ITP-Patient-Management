package com.itp.unity.backend.controller;

import com.itp.unity.backend.model.Patient;
import com.itp.unity.backend.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(value = "/api")
@RestController
public class PatientController {

    @Autowired
    private PatientService patientService;

    @RequestMapping("/patient")
    public List<Patient> getPatientDetails(){
        return patientService.getAll();

    }

    @RequestMapping("/patient/{pid}")
    public Patient getPatientDetails(@PathVariable String pid){
        return patientService.getPatientDetails(pid);

    }

    @RequestMapping(method = RequestMethod.POST, value = "/create")
    public void addPatient(@RequestBody Patient patient){
        patientService.addPatient(patient);
    }

    @RequestMapping(method = RequestMethod.PUT, value ="/update/{id}")
    public void updatePatient(@PathVariable String id, @RequestBody Patient patient){
        //String ID = String.valueOf(id);
        //patientService.findById(ID);
        patientService.updatePatient(id,patient);

    }

    @RequestMapping(method = RequestMethod.DELETE, value ="/delete/{id}")
    public void deletePatient(@PathVariable String id, @RequestBody Patient patient){
        //String ID = String.valueOf(id);
        patientService.deletePatient(id,patient);

    }

}
