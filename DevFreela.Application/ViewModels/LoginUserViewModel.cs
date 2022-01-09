namespace DevFreela.Application.ViewModels
{
    public class LoginUserViewModel
    {
        public string Email { get; private set; }

        public LoginUserViewModel(string email)
        {
            Email = email;
        }
    }
}
