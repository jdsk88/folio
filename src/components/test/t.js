pagecode = ''+nl+
	'#include <bits/stdc++.h> '+nl+
	'using namespace std; '+nl+nl+
	'string smallest(string s) '+nl+
	'{ '+nl+
	'    int l = s.length(); '+nl+
	'    string ans = ""; '+nl+nl+
	'    for (int i = 0; i < l-1; i++) { '+nl+nl+
	'        if (s[i] > s[i + 1]) { '+nl+
	'  '+nl+
	' '+nl+
	'            for (int j = 0; j < l; j++) { '+nl+
	'                if (i != j) '+nl+
	'                    ans += s[j]; '+nl+
	'            } '+nl+
	'            return ans; '+nl+
	'        } '+nl+
	'    } '+nl+
	'  '+nl+nl+
	'    ans = s.substr(0., l - 1); '+nl+
	'    return ans; '+nl+
	'} '+nl+nl+
	'int main() '+nl+
	'{ '+nl+
	'    string s = "abcda"; '+nl+
	'  '+nl+
	'    cout << smallest(s); '+nl+
	'  '+nl+
	'    return 0; '+nl+
	'} '