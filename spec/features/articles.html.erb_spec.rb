require 'spec_helper'

describe "articles/show" do

    let(:article) { FactoryGirl.create(:article) }
    let(:user) { FactoryGirl.create(:user) }

    it "renders article with delete/edit/back links " do
        visit article_path(article)
        page.should have_selector('h3', article.title)
        page.should have_selector('p', article.body)
        page.should have_link('Delete', :href=>article_path(article))
        page.should have_link('Edit', :href=>edit_article_path(article))
        page.should have_link('Back', :href=>articles_path)
    end

    before do
        visit root_path
        click_link ("Login")
        fill_in 'Email', :with  => user.email
        fill_in 'Password', :with  => user.password
        click_button ("Sign in")
    end

    it "displays a link for me to add a new article" do
        page.should have_link("New Article", new_article_path)
    end

    it "displays new article in index when creating new article" do
        click_link("New Article")
        fill_in 'article_title', :with => article.title
        fill_in 'article_body', :with => article.body
        click_button('Create')
        current_path.should == root_path
        page.should have_content('Article was successfully created.')
    end

end
