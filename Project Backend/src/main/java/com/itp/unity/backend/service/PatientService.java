package com.itp.unity.backend.service;

import com.itp.unity.backend.model.Patient;
import com.itp.unity.backend.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;


    public List<Patient> getAll(){
        List<Patient> patientList = new ArrayList<>();
        patientRepository.findAll().forEach(patientList::add);

        return patientList;
    }

    public void addPatient(Patient patient) {
        patientRepository.save(patient);
    }

    public void updatePatient(String id,Patient patient){
        //System.out.println(id);
        Patient patient1 = patientRepository.findById(id).get();
        //System.out.println(patient1.getId());
        patient1.setPatientDetails(patient);
        patientRepository.save(patient1);
    }

    public void deletePatient(String id, Patient patient) {
        patientRepository.deleteById(id);
    }

    public Patient getPatientDetails(String id) {
        return patientRepository.findById(id).orElse(null);
    }

}
