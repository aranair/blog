FactoryGirl.define do 
    factory :user do 
        email "foo@example.com"
        password "foobar"
    end

    factory :article do 
        title "MyTitle"
        body  "MyBody."
    end
end
