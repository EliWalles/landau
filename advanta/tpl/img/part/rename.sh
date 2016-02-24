j=0;
for i in *.png;
do let j+=1;
mv $i file$j.png;
done
