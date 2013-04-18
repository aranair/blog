require 'spec_helper'

describe "articles/show" do
    before(:each) do
        assign(:article, 
            stub_model(Article,
                :title => "Title",
                :body => "MyText", 
                :created_at => Time.now
            )
        )
    end

    it "renders one article" do
        render
        assert_select "h3", :text => "Title".to_s
        assert_select "p", :text => "MyText".to_s 
    end
end
