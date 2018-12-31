$(document).ready(()=>{



    const cookie = document.cookie;
    // alert(cookie);

    $(".home").html("<center><h2>Loading All Products</h2></center>");
    $.get(BaseAjaxLocalUrl+AllProductsUrl , (data)=>{

        let all_products = '';
        AllProductsJSON = data;
        data.forEach((i)=>{
            
            const text = `Priced At Only ${i.price} Rupees per ${i.sold_unit}`;
            all_products += BootstrapCard(i.photo , i.name , text , i.id , i.name);


        });
        $('.home').html(all_products);
    });

    $("#navigation li").on('click' , function(){


        $(".container div").css('display' , 'none');

        const div_class = $(this).attr('id');
        $("."+div_class).css('display' , 'block');

        $("#navigation li").removeAttr('class');
        $(this).attr('class' ,'active');

    });


    $("#home").on('click' , function(){

        let all_products = '';
        AllProductsJSON.forEach((i)=>{

            const text = `Priced At Only ${i.price} Rupees per ${i.sold_unit}`;
            all_products += BootstrapCard(i.photo , i.name , text , i.id , i.name);

        });
        $('.home').html(all_products);

    });

    $("#catagories").on('click' , function(){

        $(".catagories").html("<center><h2>Loading All Catagories</h2></center>");
        GetRequest(BaseAjaxLocalUrl+AllCatagoriesUrl , (ResponseData)=>{

            
            if(typeof(ResponseData) == 'object') {

                AllCatagoriesJSON = ResponseData;
                let CatagoriesList = '';
                ResponseData.forEach((i)=>{

                    
                    CatagoriesList += BootstrapCard(i.photo , i.name , i.desc , i.id , i.name);

                });
                
                $(".catagories").html(CatagoriesList);
            }else {

                alert(ResponseData);
            }

        });



    });
    
    $("#brands").on('click' , ()=>{

        $(".brands").html("<center><h2>Loading All Brands</h2></center>");
        GetRequest(BaseAjaxLocalUrl+AllBrandsUrl , (ResponseData)=>{

            
            if(typeof(ResponseData) == 'object') {

                AllBrandsJSON = ResponseData;
                let BrandsList = '';
                ResponseData.forEach((i)=>{

                    
                    BrandsList += BootstrapCard(i.logo , i.name , i.desc , i.id , i.name);

                });
                
                $(".brands").html(BrandsList);
            }else {

                alert(ResponseData);
            }

        });

    });

    $("#sign-in").on('click' , ()=>{

        const username = $("#username").val();
        const password = $("#pwd").val();

        if (username !== '' && password !==''){
            
            // SEND LOGIN POST REQUEST TO API AND GET BACK THE TOKEN
            

        }else{

            alert('All inputs must be provided');
        }

       
    });


    $("#sign-up").on('click' , ()=>{

        const first_name = $("#first-name").val();
        const last_name =  $("#last-name").val();
        const username = $("#signup-username").val();
        const email = $("#email").val();

    });

    $('.carousel[data-type="multi"] .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    
        for (var i = 0; i < 2; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
    
            next.children(':first-child').clone().appendTo($(this));
        }
    });

});