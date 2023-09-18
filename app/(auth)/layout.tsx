const AuthLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return ( 
        //this children will render the thing of the login folder (page.tsx)
        <div className="h-full flex items-center justify-center">
            {children} 
        </div>
     );
}
 
export default AuthLayout;