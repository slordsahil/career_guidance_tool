datasold =[1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1]

datas=[0]*21
j=0
for i in range(0,len(datasold),3):
    
    datas[j]=sum([datasold[i],datasold[i+1],datasold[i+2]])
    j+=1
print(len(datasold))
print(len(datas))
print(datas)
print(datasold)


# tets_a=scaler.fit_transform([datas])
# global finalpred
# finalpred=str(model.predict(tets_a))
# print(finalpred)