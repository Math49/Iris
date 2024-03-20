<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Category;
use App\Models\Post;
use App\Models\Comment;
use App\Models\User;


class ForumController extends Controller
{
    public function index(){

        $categories = Category::all();
        $posts = Post::all();
        $comments = Comment::all();
        $users = User::all();
        $users_role = User::with('roles')->get();

        return Inertia::render('ForumView', [
            'categories' => $categories,
            'posts' => $posts,
            'comments' => $comments,
            'users' => $users,
            'users_role' => $users_role
        ]);
    }

    public function showPost($id){
        $post = Post::find($id);
        $comments = Comment::where('post_id', $id)->get();
        $users = User::all();
        $users_role = User::with('roles')->get();
        $categories = Category::where('id', $post->category_id)->get();

        return Inertia::render('Forum/PostPattern', [
            'post' => $post,
            'comments' => $comments,
            'users' => $users,
            'categories' => $categories,
            'users_role' => $users_role
        ]);
    }

    public function comment(Request $request, $id){
        $request->validate([
            'content' => 'required'
        ]);

        Comment::create([
            'user_id' => auth()->user()->id,
            'post_id' => $id,
            'content' => $request->content
        ]);

        return redirect()->back();
    }

    public function create(){
        
        Post::create([
            'user_id' => auth()->user()->id,
            'category_id' => request('category_id'),
            'title' => request('title'),
            'content' => request('content')
        ]);

        return redirect()->back();
    }

    public function posts(){
        $categories = Category::all();
        $posts = Post::all();
        $comments = Comment::all();
        $users = User::all();

        return Inertia::render('Forum/GestionPost', [
            'categories' => $categories,
            'posts' => $posts,
            'comments' => $comments,
            'users' => $users
        ]);
    }

    public function destroyPost(Request $request, $id){
        $post = Post::find($id);
        $post->comments()->delete();
        $post->delete();

        return redirect()->back();
    }
}
