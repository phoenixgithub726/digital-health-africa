export const getSelectedNav = (store) => {
    console.log(store.PatientDashboardReducer.patientSelectedNav)
    return store.PatientDashboardReducer.patientSelectedNav
}

export const getPatientData = (store) => {
    console.log(store.PatientDashboardReducer.patientData)
    return store.PatientDashboardReducer.patientData
}