    var APPLICATION_ID = '3BB7E15A-3522-DA18-FF39-C6DACC3F7900',
        SECRET_KEY = 'E1276A74-D258-741F-FF1C-1DD1E18F7500',
        VERSION = 'v1'; //default application version;

    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);

    function Request(args) {
        args = args || {};
        this.apiEndpoint = args.apiEndpoint || "";
        this.apiSecretkey = args.apiSecretkey || "";
        this.emailAddress = args.emailAddress || "";
        this.requestId = args.requestId || "";
    }

    function sendData() {

        var endpoint = document.getElementById("endpoint").value,
            secretkey = document.getElementById("secretkey").value,
            email = document.getElementById("email").value,
            requestid = Math.random().toString(36).substring(7);

        var requestObject = new Request( {
            apiEndpoint: endpoint,
            apiSecretkey: secretkey,
            emailAddress: email,
            requestId: requestid,
        });

        if (endpoint == null || endpoint == "" ||
            secretkey == null || secretkey == "" ||
            email == null || email =="") {
            alert("Please fill out all fields.")
            return false;
        } else {
            alert('apiEndpoint = ' + requestObject.apiEndpoint + '\n' +
                'apiSecretkey = ' + requestObject.apiSecretkey + '\n' +
                'emailAddress = ' + requestObject.emailAddress);
            }

        var savedRequest = Backendless.Persistence.of(Request).save(requestObject);

    }