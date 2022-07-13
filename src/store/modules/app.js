//state
const state =  ()=>{
    return {
       showModel:false
    }
}
const mutations={
    changeModelStatus(state,status){
        state.showModel = status
    }

 }
 const actions ={

 }
 const getters={}

 export default {
     state,
     mutations,
     actions,
     getters
 }
