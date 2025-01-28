function EnumExample(){
     enum Role {
        Admin ="Admin",
        User ="user",
        Guest = "guest"
     }
     const currentRole = Role.User;
     console.log(" i am working as a "+ currentRole)
}
export default EnumExample;