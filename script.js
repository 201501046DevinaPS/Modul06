(function(){
    function Question(question,answer,correct){
        this.question=question;
        this.answer=answer;
        this.correct=correct;

    }
    

    Question.prototype.displayQuestion=function(){
        console.log(this.question);
        
        for (var i=0;i<this.answer.length;i++){
            console.log(i+" : "+this.answer[i]);
        }
    }
    
    Question.prototype.checkAnswer=function(ans){
        console.log(ans);
       
        
        if(ans===this.correct){
            nilaiTotal +=1;
            console.log('jawab benar');
        }else{
            nilaiSalahJwb += 1;
            console.log('salah, coba lagi');
            
        }
    }
    
    
    var q1= new Question('apakah javascript bahasa pling keren sedunia?', ['ya','gk'],'0');
    var q2= new Question('siapa dosen yg mengajar kuliah ini?',['john','misel','oskar'],'2');
    var q3= new Question('kata yang paling bagus mndskripsikan koding?',['bosen','susah','bahagiakan','bosankan'],'2');
    
     var q4= new Question('Siapa dosen pengampu makul Jarkom2?',['Suyudi','Dhany','oskar'],'1');
     var q5= new Question('Stikom Huruf Apa',['A','D','S'],'2');
     var q6= new Question('Stikom berapa lantainya?',['4','5','3'],'2');
     var q7= new Question('Tahun Target visi misi Stikom?',['2020','2025','2030'],'1');
     var q8= new Question('Dosen stikom diawali huruf depan D',['David','Dhani','Dodit'],'1');
     var q9= new Question('di koperasi stikom, apa yang kita temukan?',['suher','misel','jajan'],'2');
    
    
    
    
    var questions=[q1,q2,q3,q4,q5,q6,q7,q8,q9];
    
    var nilaiTotal=0;
    var nilaiSalahJwb=0;
    var jmlPertanyaan=0;
    
    stop:
    {
        for(;;){
            
            
var n=Math.floor(Math.random()*questions.length);
            
questions[n].displayQuestion();
var answer=parseInt(prompt('pilih jawaban yg benar.!, ketikan exit untuk mengakhiri game ini.'));
    if(answer=='exit')
        {
            console.log('');
            console.log('       keluar game !       ');
            console.log('Jml soal terjawab  ' +jmlPertanyaan);
            console.log('Jml Salah Jawab '+nilaiSalahJwb);
            console.log('Total Nilai '+nilaiTotal);
            
            break stop;
            
            
        }
jmlPertanyaan +=1;
questions[n].checkAnswer(answer); 
            
            
        }
    }
   
    
    
    
})();