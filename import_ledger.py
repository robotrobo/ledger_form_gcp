# # is requested by the php file to call tally and ask for data
import requests
import sys
if len(sys.argv) == 4:

    name = sys.argv[1]
    start = sys.argv[2]
    end = sys.argv[3]
    req = f'<ENVELOPE > <HEADER > <TALLYREQUEST > Export Data < /TALLYREQUEST > </HEADER > <BODY > <EXPORTDATA > <REQUESTDESC > <STATICVARIABLES > <!--Specify the FROM DATE here--> < SVFROMDATE > {start} < /SVFROMDATE > <!--Specify the TO DATE here--> < SVTODATE > {end} < /SVTODATE > <SVEXPORTFORMAT >$$SysName: ASCII < /SVEXPORTFORMAT > <!--Specify the LedgerName here--> < LEDGERNAME >{name}< /LEDGERNAME > </STATICVARIABLES > <!--Report Name--> < REPORTNAME > Ledger Vouchers < /REPORTNAME > </REQUESTDESC > </EXPORTDATA > </BODY > </ENVELOPE >'
    r = requests.post("http://anishfoods.in:9000", data=req)
    if r.text == "":
        print(name)
    else:
        print(r.text)
elif len(sys.argv) == 5:
    print("Only name, start and end dates needed")
else:
    print("please enter an arguement")
