/**
 * @author Nguyen Ba Uoc
 */

function HTMLUtil() {
  this.entities = [] ;
  
  this.entities['nbsp'] = 160 ;
  this.entities['iexcl'] = 161 ;
  this.entities['cent'] = 162 ;
  this.entities['pound'] = 163 ;
  this.entities['curren'] = 164 ;
  this.entities['yen'] = 165 ;
  this.entities['brvbar'] = 166 ;
  this.entities['sect'] = 167 ;
  this.entities['uml'] = 168 ;
  this.entities['copy'] = 169 ;
  this.entities['ordf'] = 170 ;
  this.entities['laquo'] = 171 ;
  this.entities['not'] = 172 ;
  this.entities['shy'] = 173 ;
  this.entities['reg'] = 174 ;
  this.entities['macr'] = 175 ;
  this.entities['deg'] = 176 ;
  this.entities['plusmn'] = 177 ;
  this.entities['sup2'] = 178 ;
  this.entities['sup3'] = 179 ;
  this.entities['acute'] = 180 ;
  this.entities['micro'] = 181 ;
  this.entities['para'] = 182 ;
  this.entities['middot'] = 183 ;
  this.entities['cedil'] = 184 ;
  this.entities['sup1'] = 185 ;
  this.entities['ordm'] = 186 ;
  this.entities['raquo'] = 187 ;
  this.entities['frac14'] = 188 ;
  this.entities['frac12'] = 189 ;
  this.entities['frac34'] = 190 ;
  this.entities['iquest'] = 191 ;
  this.entities['Agrave'] = 192 ;
  this.entities['Aacute'] = 193 ;
  this.entities['Acirc'] = 194 ;
  this.entities['Atilde'] = 195 ;
  this.entities['Auml'] = 196 ;
  this.entities['Aring'] = 197 ;
  this.entities['AElig'] = 198 ;
  this.entities['Ccedil'] = 199 ;
  this.entities['Egrave'] = 200 ;
  this.entities['Eacute'] = 201 ;
  this.entities['Ecirc'] = 202 ;
  this.entities['Euml'] = 203 ;
  this.entities['Igrave'] = 204 ;
  this.entities['Iacute'] = 205 ;
  this.entities['Icirc'] = 206 ;
  this.entities['Iuml'] = 207 ;
  this.entities['ETH'] = 208 ;
  this.entities['Ntilde'] = 209 ;
  this.entities['Ograve'] = 210 ;
  this.entities['Oacute'] = 211 ;
  this.entities['Ocirc'] = 212 ;
  this.entities['Otilde'] = 213 ;
  this.entities['Ouml'] = 214 ;
  this.entities['times'] = 215 ;
  this.entities['Oslash'] = 216 ;
  this.entities['Ugrave'] = 217 ;
  this.entities['Uacute'] = 218 ;
  this.entities['Ucirc'] = 219 ;
  this.entities['Uuml'] = 220 ;
  this.entities['Yacute'] = 221 ;
  this.entities['THORN'] = 222 ;
  this.entities['szlig'] = 223 ;
  this.entities['agrave'] = 224 ;
  this.entities['aacute'] = 225 ;
  this.entities['acirc'] = 226 ;
  this.entities['atilde'] = 227 ;
  this.entities['auml'] = 228 ;
  this.entities['aring'] = 229 ;
  this.entities['aelig'] = 230 ;
  this.entities['ccedil'] = 231 ;
  this.entities['egrave'] = 232 ;
  this.entities['eacute'] = 233 ;
  this.entities['ecirc'] = 234 ;
  this.entities['euml'] = 235 ;
  this.entities['igrave'] = 236 ;
  this.entities['iacute'] = 237 ;
  this.entities['icirc'] = 238 ;
  this.entities['iuml'] = 239 ;
  this.entities['eth'] = 240 ;
  this.entities['ntilde'] = 241 ;
  this.entities['ograve'] = 242 ;
  this.entities['oacute'] = 243 ;
  this.entities['ocirc'] = 244 ;
  this.entities['otilde'] = 245 ;
  this.entities['ouml'] = 246 ;
  this.entities['divide'] = 247 ;
  this.entities['oslash'] = 248 ;
  this.entities['ugrave'] = 249 ;
  this.entities['uacute'] = 250 ;
  this.entities['ucirc'] = 251 ;
  this.entities['uuml'] = 252 ;
  this.entities['yacute'] = 253 ;
  this.entities['thorn'] = 254 ;
  this.entities['yuml'] = 255 ;
  this.entities['fnof'] = 402 ;
  this.entities['Alpha'] = 913 ;
  this.entities['Beta'] = 914 ;
  this.entities['Gamma'] = 915 ;
  this.entities['Delta'] = 916 ;
  this.entities['Epsilon'] = 917 ;
  this.entities['Zeta'] = 918 ;
  this.entities['Eta'] = 919 ;
  this.entities['Theta'] = 920 ;
  this.entities['Iota'] = 921 ;
  this.entities['Kappa'] = 922 ;
  this.entities['Lambda'] = 923 ;
  this.entities['Mu'] = 924 ;
  this.entities['Nu'] = 925 ;
  this.entities['Xi'] = 926 ;
  this.entities['Omicron'] = 927 ;
  this.entities['Pi'] = 928 ;
  this.entities['Rho'] = 929 ;
  this.entities['Sigma'] = 931 ;
  this.entities['Tau'] = 932 ;
  this.entities['Upsilon'] = 933 ;
  this.entities['Phi'] = 934 ;
  this.entities['Chi'] = 935 ;
  this.entities['Psi'] = 936 ;
  this.entities['Omega'] = 937 ;
  this.entities['alpha'] = 945 ;
  this.entities['beta'] = 946 ;
  this.entities['gamma'] = 947 ;
  this.entities['delta'] = 948 ;
  this.entities['epsilon'] = 949 ;
  this.entities['zeta'] = 950 ;
  this.entities['eta'] = 951 ;
  this.entities['theta'] = 952 ;
  this.entities['iota'] = 953 ;
  this.entities['kappa'] = 954 ;
  this.entities['lambda'] = 955 ;
  this.entities['mu'] = 956 ;
  this.entities['nu'] = 957 ;
  this.entities['xi'] = 958 ;
  this.entities['omicron'] = 959 ;
  this.entities['pi'] = 960 ;
  this.entities['rho'] = 961 ;
  this.entities['sigmaf'] = 962 ;
  this.entities['sigma'] = 963 ;
  this.entities['tau'] = 964 ;
  this.entities['upsilon'] = 965 ;
  this.entities['phi'] = 966 ;
  this.entities['chi'] = 967 ;
  this.entities['psi'] = 968 ;
  this.entities['omega'] = 969 ;
  this.entities['thetasym'] = 977 ;
  this.entities['upsih'] = 978 ;
  this.entities['piv'] = 982 ;
  this.entities['bull'] = 8226 ;
  this.entities['hellip'] = 8230 ;
  this.entities['prime'] = 8242 ;
  this.entities['Prime'] = 8243 ;
  this.entities['oline'] = 8254 ;
  this.entities['frasl'] = 8260 ;
  this.entities['weierp'] = 8472 ;
  this.entities['image'] = 8465 ;
  this.entities['real'] = 8476 ;
  this.entities['trade'] = 8482 ;
  this.entities['alefsym'] = 8501 ;
  this.entities['larr'] = 8592 ;
  this.entities['rarr'] = 8594 ;
  this.entities['darr'] = 8595 ;
  this.entities['harr'] = 8596 ;
  this.entities['crarr'] = 8629 ;
  this.entities['lArr'] = 8656 ;
  this.entities['uarr'] = 8593 ;
  this.entities['uArr'] = 8657 ;
  this.entities['rArr'] = 8658 ;
  this.entities['dArr'] = 8659 ;
  this.entities['hArr'] = 8660 ;
  this.entities['forall'] = 8704 ;
  this.entities['part'] = 8706 ;
  this.entities['exist'] = 8707 ;
  this.entities['empty'] = 8709 ;
  this.entities['nabla'] = 8711 ;
  this.entities['isin'] = 8712 ;
  this.entities['notin'] = 8713 ;
  this.entities['ni'] = 8715 ;
  this.entities['prod'] = 8719 ;
  this.entities['sum'] = 8721 ;
  this.entities['minus'] = 8722 ;
  this.entities['lowast'] = 8727 ;
  this.entities['radic'] = 8730 ;
  this.entities['prop'] = 8733 ;
  this.entities['infin'] = 8734 ;
  this.entities['ang'] = 8736 ;
  this.entities['and'] = 8743 ;
  this.entities['or'] = 8744 ;
  this.entities['cap'] = 8745 ;
  this.entities['cup'] = 8746 ;
  this.entities['int'] = 8747 ;
  this.entities['there4'] = 8756 ;
  this.entities['sim'] = 8764 ;
  this.entities['cong'] = 8773 ;
  this.entities['asymp'] = 8776 ;
  this.entities['ne'] = 8800 ;
  this.entities['equiv'] = 8801 ;
  this.entities['le'] = 8804 ;
  this.entities['ge'] = 8805 ;
  this.entities['sub'] = 8834 ;
  this.entities['sup'] = 8835 ;
  this.entities['nsub'] = 8836 ;
  this.entities['sube'] = 8838 ;
  this.entities['supe'] = 8839 ;
  this.entities['oplus'] = 8853 ;
  this.entities['otimes'] = 8855 ;
  this.entities['perp'] = 8869 ;
  this.entities['sdot'] = 8901 ;
  this.entities['lceil'] = 8968 ;
  this.entities['rceil'] = 8969 ;
  this.entities['lfloor'] = 8970 ;
  this.entities['rfloor'] = 8971 ;
  this.entities['lang'] = 9001 ;
  this.entities['rang'] = 9002 ;
  this.entities['loz'] = 9674 ;
  this.entities['spades'] = 9824 ;
  this.entities['clubs'] = 9827 ;
  this.entities['hearts'] = 9829 ;
  this.entities['diams'] = 9830 ;
  this.entities['quot'] = 34 ;
  this.entities['amp'] = 38 ;
  this.entities['lt'] = 60 ;
  this.entities['gt'] = 62 ;
  this.entities['OElig'] = 338 ;
  this.entities['oelig'] = 339 ;
  this.entities['Scaron'] = 352 ;
  this.entities['scaron'] = 353 ;
  this.entities['Yuml'] = 376 ;
  this.entities['circ'] = 710 ;
  this.entities['tilde'] = 732 ;
  this.entities['ensp'] = 8194 ;
  this.entities['emsp'] = 8195 ;
  this.entities['thinsp'] = 8201 ;
  this.entities['zwnj'] = 8204 ;
  this.entities['zwj'] = 8205 ;
  this.entities['lrm'] = 8206 ;
  this.entities['rlm'] = 8207 ;
  this.entities['ndash'] = 8211 ;
  this.entities['mdash'] = 8212 ;
  this.entities['lsquo'] = 8216 ;
  this.entities['rsquo'] = 8217 ;
  this.entities['sbquo'] = 8218 ;
  this.entities['ldquo'] = 8220 ;
  this.entities['rdquo'] = 8221 ;
  this.entities['bdquo'] = 8222 ;
  this.entities['dagger'] = 8224 ;
  this.entities['Dagger'] = 8225 ;
  this.entities['permil'] = 8240 ;
  this.entities['lsaquo'] = 8249 ;
  this.entities['rsaquo'] = 8250 ;
  this.entities['euro'] = 8364 ;
}

HTMLUtil.prototype.entitiesEncode = function(str) {
  for(var n in this.entities) {
    var entityChar = String.fromCharCode(this.entities[n]) ;
    while(str.indexOf(entityChar) != -1) {
      str = str.replace(entityChar, '&' + n + ';') ;
    }
  }
  return str ;
}

HTMLUtil.prototype.entitiesDecode = function(str) {
  for(var n in this.entities) {
    var entityChar = String.fromCharCode(this.entities[n]) ;
    var htmlEntity = '&' + n + ';' ;
    while(str.indexOf(htmlEntity) != -1) {
      str = str.replace(htmlEntity, entityChar) ;
    }
  }
  return str ;
}

eXo.core.HTMLUtil = new HTMLUtil() ;