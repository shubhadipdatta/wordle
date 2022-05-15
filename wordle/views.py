from django.shortcuts import render
import enchant
from random_word import RandomWords
from PyDictionary import PyDictionary

# Create your views here.
def about(request):
    return render(request,'about.html')

def rule(request):
    return render(request,'rule.html')

def contact(request):
    return render(request,'contact.html')



def home(request):
    word=request.POST.get('word')
    result=request.POST.get('result')
    guess=request.POST.get('guess')
    guess_count=request.POST.get('guess_count')
    guess_count= 0 if guess_count is None else int(guess_count)

    guess1=request.POST.get('guess1')
    guess2=request.POST.get('guess2')
    guess3=request.POST.get('guess3')
    guess4=request.POST.get('guess4')
    guess5=request.POST.get('guess5')
    guess6=request.POST.get('guess6')

    start_time=request.POST.get('start_time')
    
    dictionary=PyDictionary()


    if word is None:
        r = RandomWords()
        word=r.get_random_word(hasDictionaryDef="true",minCorpusCount=100000,minLength=5, maxLength=5).upper()

        guess_count=0
        result="Hey, here we start. Try to guess the five letter word in 6 tries. See the rule section for more detail"
        return render(request,'home.html',{'word':word,'result':result,'guess':guess,'guess_count':guess_count,'guess1':guess1,'guess2':guess2,'guess3':guess3,'guess4':guess4,'guess5':guess5,'guess6':guess6,'start_time':start_time})

    else:
        if guess is not None:
            if len(guess)==5:
                d = enchant.Dict("en_US")
                if d.check(guess):
                    guess=guess.upper()
                    guess_count=guess_count+1

                    if guess_count==1:
                        guess1=guess
                    elif guess_count==2:
                        guess2=guess
                    elif guess_count==3:
                        guess3=guess
                    elif guess_count==4:
                        guess4=guess
                    elif guess_count==5:
                        guess5=guess
                    elif guess_count==6:
                        guess6=guess
                    
                    if(guess==word):
                        result="win"
                        return render(request,'result.html',{'word':word,'result':result,'guess':guess,'guess_count':guess_count,'guess1':guess1,'guess2':guess2,'guess3':guess3,'guess4':guess4,'guess5':guess5,'guess6':guess6,'start_time':start_time,'meaning':str(dictionary.meaning(word))})
                    else:
                        if guess_count>=6:
                            result="lost"
                            return render(request,'result.html',{'word':word,'result':result,'guess':guess,'guess_count':guess_count,'guess1':guess1,'guess2':guess2,'guess3':guess3,'guess4':guess4,'guess5':guess5,'guess6':guess6,'start_time':start_time,'meaning':str(dictionary.meaning(word))})
                        else:
                            result="Well try! But this is not the Wordle word. Let's attempt for another guess. "       
                            return render(request,'home.html',{'word':word,'result':result,'guess':guess,'guess_count':guess_count,'guess1':guess1,'guess2':guess2,'guess3':guess3,'guess4':guess4,'guess5':guess5,'guess6':guess6,'start_time':start_time})
                else:
                    result="Oops! This is not a valid English Word. Lets try for a valid word"
                    return render(request,'home.html',{'word':word,'result':result,'guess':guess,'guess_count':guess_count,'guess1':guess1,'guess2':guess2,'guess3':guess3,'guess4':guess4,'guess5':guess5,'guess6':guess6,'start_time':start_time})
            else:
                result="Oops! You must have to guess a word with 6 letters"
                return render(request,'home.html',{'word':word,'result':result,'guess':guess,'guess_count':guess_count,'guess1':guess1,'guess2':guess2,'guess3':guess3,'guess4':guess4,'guess5':guess5,'guess6':guess6,'start_time':start_time})

        else:
            return render(request,'home.html',{'word':word,'result':result,'guess':guess,'guess_count':guess_count,'guess1':guess1,'guess2':guess2,'guess3':guess3,'guess4':guess4,'guess5':guess5,'guess6':guess6,'start_time':start_time})
