<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$file = 'responses.json'; // File to store responses
$backupFile = 'responses_backup.json'; // Backup file

// Predefined commands and responses (only used if JSON file is missing)
$defaultResponses = [
    "bby" => ["bby kkow"],
    "ki koro" => ["tmk miss kori bby"],
    "ooo" => ["humm"],
    "i love you" => ["i labu 2"]
];

// Check if the file exists; if not, create it with default responses
if (!file_exists($file)) {
    file_put_contents($file, json_encode($defaultResponses, JSON_PRETTY_PRINT));
}

// Load existing responses
$responses = json_decode(file_get_contents($file), true);

// Ensure responses is an array
if (!is_array($responses)) {
    $responses = $defaultResponses;
}

// Handle user input
if (isset($_GET['question'])) {
    $userMessage = strtolower(trim($_GET['question']));

    // ✅ LIST ALL COMMANDS: !list
    if ($userMessage === "!list") {
        echo json_encode(["commands" => array_keys($responses)]);
        exit;
    }

    // ✅ REMOVE A COMMAND: !remove command
    if (strpos($userMessage, '!remove ') === 0) {
        $commandToRemove = trim(substr($userMessage, 8));
        if (isset($responses[$commandToRemove])) {
            unset($responses[$commandToRemove]);
            file_put_contents($file, json_encode($responses, JSON_PRETTY_PRINT));
            echo json_encode(["alxa" => "Command '$commandToRemove' removed successfully."]);
        } else {
            echo json_encode(["alxa" => "Command '$commandToRemove' not found."]);
        }
        exit;
    }

    // ✅ ADD NEW COMMAND(S): !add command-response+command2-response2
    if (strpos($userMessage, '!add ') === 0) {
        $newCommands = substr($userMessage, 5); // Remove "!add " prefix
        $pairs = explode('+', $newCommands); // Split multiple pairs

        foreach ($pairs as $pair) {
            $commandResponse = explode('-', $pair, 2); // Split command and response
            if (count($commandResponse) === 2) {
                $command = trim($commandResponse[0]);
                $response = trim($commandResponse[1]);

                // Ensure command exists and prevent duplicate responses
                if (!isset($responses[$command])) {
                    $responses[$command] = [];
                }
                if (!in_array($response, $responses[$command])) {
                    $responses[$command][] = $response;
                }
            }
        }

        // Create a backup before saving
        copy($file, $backupFile);
        file_put_contents($file, json_encode($responses, JSON_PRETTY_PRINT));

        echo json_encode(["alxa" => "Commands added successfully!"]);
        exit;
    }

    // ✅ CHECK IF COMMAND EXISTS
    if (isset($responses[$userMessage])) {
        $randomResponse = $responses[$userMessage][array_rand($responses[$userMessage])];
        echo json_encode(["alxa" => $randomResponse]);
    } else {
        echo json_encode(["alxa" => "Sorry, I didn't understand that."]);
    }
} else {
    echo json_encode(["error" => "No question provided."]);
}
?>
