#include<iostream>
#include<vector>
#include<fstream>
using namespace std;
int main(){
    ifstream fin("int.txt");
	ofstream fcout("Gintout.txt");
    int n;
    fin>>n;
    while(n--){
        char href[50],s[100];
        int k;
        fin>>href>>k>>s;
        fcout<<"<dd><a href=\"http://";
        for(int i=0;href[i];i++) fcout<<href[i];
        fcout<<"\" ";
        if(k==1) fcout<<"target=\"_blank\"";
        fcout<<">";
        for(int i=0;s[i];i+=3) 
        fcout<<s[i]<<s[i+1]<<s[i+2];
        fcout<<"</a></dd>\n";
    }
    return 0;
}