# is requested by the php file to call tally and ask for data
import requests
LoL_req = '<ENVELOPE> 	<HEADER> <VERSION>1</VERSION>    		<TALLYREQUEST>Export</TALLYREQUEST>    		<TYPE>Data</TYPE>    		<ID>List of Ledgers</ID> 	</HEADER><BODY><DESC><STATICVARIABLES><EXPLODEFLAG>Yes</EXPLODEFLAG><SVEXPORTFORMAT>$$SysName:ASCII</SVEXPORTFORMAT> </STATICVARIABLES><TDL><TDLMESSAGE><REPORT NAME="List of Ledgers" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">  <FORMS>List of Ledgers</FORMS>   </REPORT><FORM NAME="List of Ledgers" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">  <TOPPARTS>List of Ledgers</TOPPARTS>   <XMLTAG>"List of Ledgers"</XMLTAG>   </FORM><PART NAME="List of Ledgers" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">  <TOPLINES>List of Ledgers</TOPLINES>   <REPEAT>List of Ledgers : Collection of Ledgers</REPEAT>   <SCROLLED>Vertical</SCROLLED>   </PART><LINE NAME="List of Ledgers" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">  <LEFTFIELDS>List of Ledgers</LEFTFIELDS>   </LINE><FIELD NAME="List of Ledgers" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">  <SET>$Name</SET>   <XMLTAG>"NAME"</XMLTAG>   </FIELD><COLLECTION NAME="Collection of Ledgers" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">  <TYPE>Ledger</TYPE>   </COLLECTION>  </TDLMESSAGE>  </TDL></DESC></BODY></ENVELOPE>'
r = requests.post("http://anishfoods.in:9000", data=LoL_req)
# r = requests.post("http://localhost:9000", data=LoL_req)
print(r.text)
