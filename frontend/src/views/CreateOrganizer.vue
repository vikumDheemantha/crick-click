<template>

  <div class="createOrganizer pa-6">
    <h1 class="text-center">Create 
        Organizer</h1>
    <div class="pa-12">

       
       
         
             <v-file-input
                :rules="rules"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an image"
                prepend-icon="mdi-camera"
                label="Image"
                outlined>         
                </v-file-input>
         
      
         
              <v-text-field
              ref="name"
              name="name"
              label="Name"
              id="name"
              v-model="name"
              placeholder="Name"
              outlined
              required></v-text-field>
         
      


        
   
          
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                outlined
                required>
        </v-text-field>
          
     

    
          
              <v-text-field
                 v-model="phoneNumber"
                :counter="10"
                :error-messages="errors"
                label="Phone Number"
                outlined
                required
        ></v-text-field>
         
      

       
    
          
              <v-autocomplete
            ref="type"
            v-model="type"
            :rules="[() => !!type || 'This field is required']"
            :items="types"
            label="Type"
            placeholder="Select..."
            required
            outlined
          ></v-autocomplete>
          
      


        
         
              <v-textarea
              ref="description"
              name="description"
              label="Description"
              id="description"
              multi-line
              v-model="description"
              outlined
              required></v-textarea>
          
         
          
              <v-btn
                class="primary pa-5"
                :disabled="!formIsValid"
                type="submit">Create</v-btn>
         
      
    
    </div>
  
  </div>
 
</template>

 <script>


export default({

    data: () => ({
      rules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],

      types: ['National', 'Provincial', 'District', 'Regional','School','Sport Club'],
      description:'',
      name:''
      
    }),
    
        email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],


    methods:{
        onPickFile(){
            this.$refs.fileInput.click()
        },
        submit () {
        this.$refs.observer.validate()
      }
   
    }
})
</script>
