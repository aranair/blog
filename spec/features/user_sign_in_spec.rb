require "spec_helper"


describe "user sign in" do
    let (:user) { FactoryGirl.create(:user) }
   
    it "displays a link that allows me to login then=> shows logout and new article links" do 
        visit root_path
        page.should have_content("Login")
        click_link 'Login'
        fill_in "Email",    :with => user.email
        fill_in "Password", :with => user.password
        click_button 'Sign in'
        page.should have_content("Signed in successfully")
        page.should have_content("Logout")
        page.should have_content("New Article")
    end
end
